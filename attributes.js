var vscode = require( 'vscode' );

function getAttribute( tag, attribute, defaultValue )
{
    var config = vscode.workspace.getConfiguration( 'tagexplorer.highlights' );
    var defaultHighlight = config.get( 'defaultHighlight' );
    if( defaultHighlight[ attribute ] !== undefined )
    {
        return defaultHighlight[ attribute ];
    }
    
    return defaultValue;
}

function getIcon( tag )
{
    return getAttribute( tag, 'icon', undefined );
}

function getIconColour( tag )
{
    var foreground = getAttribute( tag, 'foreground', undefined );
    var background = getAttribute( tag, 'background', undefined );

    return getAttribute( tag, 'iconColour', foreground ? foreground : ( background ? background : "green" ) );
}

module.exports.getAttribute = getAttribute;
module.exports.getIcon = getIcon;
module.exports.getIconColour = getIconColour;
