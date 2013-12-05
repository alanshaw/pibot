Blockly.Blocks['pibot_movement'] = {
  init: function() {
    this.setColour(160);
    this.appendValueInput('VALUE')
        .appendTitle(dropdown, 'FORWARD')
        .setCheck('Number')
        .appendTitle('for');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Moves PiBot forwards or backwards for a given length of time');

    var dropdown = new Blockly.FieldDropdown([['forwards', 'FORWARDS'], ['backwards', 'BACKWARDS']]);
  }
};