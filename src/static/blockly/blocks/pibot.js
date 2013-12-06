Blockly.Blocks['pibot_movement'] = {
  // Move forwards or backwards for a given number of seconds
  init: function() {
    this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
    this.setColour(160);
    var dropdown = new Blockly.FieldDropdown([['forwards', 'FORWARDS'], ['backwards', 'BACKWARDS']]);
    this.appendDummyInput()
        .appendTitle('move')
        .appendTitle(dropdown, 'MODE')
        .appendTitle('for')
        .appendTitle(new Blockly.FieldTextInput('3'), 'NUMBER')
        .appendTitle('seconds');
   	this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Returns number of letters in the provided text.');
  }
};

Blockly.Blocks['pibot_stop'] = {
  // Stop all movement
  init: function() {
    this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
    this.setColour(160);
    this.appendDummyInput()
        .appendTitle('stop');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Returns number of letters in the provided text.');
  }
};

Blockly.Blocks['pibot_turn'] = {
  // Turn 90 degrees left or right
  init: function() {
    this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
    this.setColour(160);
    var dropdown = new Blockly.FieldDropdown([['left', 'LEFT'], ['right', 'RIGHT']]);
    this.appendDummyInput()
        .appendTitle('turn')
        .appendTitle(dropdown, 'MODE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Returns number of letters in the provided text.');
  }
};

Blockly.Blocks['pibot_speak'] = {
  // Speak the words in the text input.
  init: function() {
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(160);
    this.appendDummyInput()
        .appendTitle('say')
        .appendTitle(new Blockly.FieldTextInput('hello'), 'TEXT')
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.TEXT_TEXT_TOOLTIP);
  }
};