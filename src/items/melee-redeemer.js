// recipe: 20k credits, 1 Vasto, 1 Dual Skana, 2 Argon Crystal, 12 hours.
// rush: 35 plat
// Market price: 175 plat
// BP price 20k credits

var weapon = React.createClass({
    propTypes: {
        ItemName:       React.PropTypes.string.isRequired,
        DisplayName:    React.PropTypes.string.isRequired,
        Recipe:         React.PropTypes.any,
        Description:    React.PropTypes.string,
    },
    
    render: function() {
        return (
            React.createElement('div', {key:        stuff,
                                        className:  stuff,
                                       },
                                React.createElement('div', {}, "text goes here"),
                                React.createElement('div', {}, "further text goes here")
            )
        )
    },
});