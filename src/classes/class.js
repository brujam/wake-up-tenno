var weapon = React.createClass({
    propTypes: {
        ItemName:       React.PropTypes.string.isRequired,
        DisplayName:    React.PropTypes.string.isRequired,
        Recipe:         React.PropTypes.any,
        Source:         React.PropTypes.string,
        Description:    React.PropTypes.string,
    },
    
    render: function() {
        return (
            React.createElement('div', {key:        this.props.ItemName,
                                        className:  this.props.ItemName,
                                        onClick: function() { alert("Hi");},
                                       },
                                React.createElement('div', {}, "Name: " + this.props.DisplayName),
                                React.createElement('div', {}, "Description: " + this.props.Description)
            )
        )
    },
});

var weaponListItem = React.createClass({
    propTypes: {
        MiniIcon:       React.PropTypes.string.isRequired,
        DisplayName:    React.PropTypes.string.isRequired,
        ItemName:       React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('div', {key:        this.props.ItemName,
                                        className:  this.props.ItemName,
                                        onClick: function(ItemName) { console.log("Render weapon " + ItemName + " in main pane");},
                                       },
                                React.createElement('div', {}, "Name: " + this.props.DisplayName)
            )
        )
    },
});