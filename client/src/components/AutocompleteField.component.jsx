import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { MenuItem } from 'material-ui/Menu';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { withStyles } from 'material-ui/styles';


// HELPER FUNCTIONS

const renderInput = (inputProps) => {
  const { classes, autoFocus, value, ref, ...other } = inputProps;

  return (
    <TextField
      autoFocus={autoFocus}
      className={classes.textField}
      value={value}
      inputRef={ref}
      InputProps={{
        classes: {
          input: classes.input,
        },
        ...other,
      }}
    />
  );
};

const renderSuggestion = (suggestion, { query, isHighlighted }) => {
  const matches = match(suggestion, query);
  const parts = parse(suggestion, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={index} style={{ fontWeight: 300 }}>
              {part.text}
            </span>
          ) : (
            <strong key={index} style={{ fontWeight: 500 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
};

const renderSuggestionsContainer = (options) => {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
};

const getSuggestionValue = (suggestion) => {
  return suggestion;
};

function getSuggestions(suggestions, value) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  if (inputLength === 0) {
    return [];
  }

  return suggestions.filter((suggestion) => {
    const suggestionChars = suggestion.toLowerCase().slice(0, inputLength);
    const matchesInput = inputValue === suggestionChars && count < 5;
    if (matchesInput) {
      count += 1;
    }
    return matchesInput;
  });
}


// STYLES

const styles = theme => ({
  container: {
    flexGrow: 1,
    position: 'relative',
    height: '100%',
    margin: 10,
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  textField: {
    width: '100%',
  },
});

// PRIMARY COMPONENT

class AutocompleteField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: [],
    };
  }

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(this.props.suggestions, value),
    });
  }

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  }

  handleChange = (event, { newValue }) => {
    this.props.updateInput(newValue);
    this.setState({
      value: newValue,
    });
  }

  render() {

    const { placeholderText, classes } = this.props;

    return (
      <Autosuggest
        theme={{
          container: classes.container,
          suggestionsContainer: classes.suggestionsContainer,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderInputComponent={renderInput}
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        renderSuggestionsContainer={renderSuggestionsContainer}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={{
          autoFocus: true,
          classes,
          placeholder: placeholderText,
          value: this.state.value || this.props.defaultVal,
          onChange: this.handleChange,
        }}
      />
    );
  }
}


AutocompleteField.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateInput: PropTypes.func.isRequired,
  defaultVal: PropTypes.string,
  placeholderText: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(AutocompleteField);

