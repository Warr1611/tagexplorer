var vscode = require( 'vscode' );
var fs = require( 'fs' );
var path = require( 'path' );
var attributes = require( './attributes.js' );

var context;

function init( c )
{
    context = c;
}

function shouldExpand()
{
    return context.workspaceState.get( 'expanded', vscode.workspace.getConfiguration( 'tag-tree.tree' ).get( 'expanded', false ) );
}

function shouldFlatten()
{
    return context.workspaceState.get( 'flat', vscode.workspace.getConfiguration( 'tag-tree.tree' ).get( 'flat', false ) );
}

function shouldShowTagsOnly()
{
    return context.workspaceState.get( 'tagsOnly', vscode.workspace.getConfiguration( 'tag-tree.tree' ).get( 'tagsOnly', false ) );
}

function shouldShowCounts()
{
    return vscode.workspace.getConfiguration( 'tag-tree.tree' ).get( 'showCountsInTree', false );
}

function showFilterCaseSensitive()
{
    return vscode.workspace.getConfiguration( 'tag-tree.tree' ).get( 'filterCaseSensitive', false );
}

function isRegexCaseSensitive()
{
    return vscode.workspace.getConfiguration( 'tag-tree.regex' ).get( 'regexCaseSensitive', true );
}

function showBadges()
{
    return vscode.workspace.getConfiguration( 'tag-tree.tree' ).get( 'showBadges', false );
}

function regex()
{
    return {
        tags: tags(),
        regex: vscode.workspace.getConfiguration( 'tag-tree.regex' ).get( 'regex' ),
        caseSensitive: vscode.workspace.getConfiguration( 'tag-tree.regex' ).get( 'regexCaseSensitive' )
    };
}

function ripgrepPath()
{
    function exeName()
    {
        var isWin = /^win/.test( process.platform );
        return isWin ? "rg.exe" : "rg";
    }

    function exePathIsDefined( rgExePath )
    {
        return fs.existsSync( rgExePath ) ? rgExePath : undefined;
    }

    var rgPath = "";

    rgPath = exePathIsDefined( vscode.workspace.getConfiguration( 'tag-tree.ripgrep' ).ripgrep );
    if( rgPath ) return rgPath;

    rgPath = exePathIsDefined( path.join( path.dirname( path.dirname( require.main.filename ) ), "node_modules/vscode-ripgrep/bin/", exeName() ) );
    if( rgPath ) return rgPath;

    rgPath = exePathIsDefined( path.join( path.dirname( path.dirname( require.main.filename ) ), "node_modules.asar.unpacked/vscode-ripgrep/bin/", exeName() ) );
    if( rgPath ) return rgPath;

    return rgPath;
}

function tags()
{
    return vscode.workspace.getConfiguration( 'tag-tree.general' ).tags.sort().reverse();
}

function shouldSortTagsOnlyViewAlphabetically()
{
    return vscode.workspace.getConfiguration( 'tag-tree.tree' ).sortTagsOnlyViewAlphabetically;
}

function labelFormat()
{
    return vscode.workspace.getConfiguration( 'tag-tree.tree' ).labelFormat;
}

function tooltipFormat()
{
    return vscode.workspace.getConfiguration( 'tag-tree.tree' ).tooltipFormat;
}

function shouldShowHighlights( scheme )
{
    var schemes = vscode.workspace.getConfiguration( 'tag-tree.highlights' ).schemes;
    return schemes && schemes.length && schemes.indexOf( scheme ) !== -1;
}

function shouldUseBuiltInFileExcludes()
{
    var useBuiltInExcludes = vscode.workspace.getConfiguration( 'tag-tree.filtering' ).useBuiltInExcludes;
    return useBuiltInExcludes === "file exclude" || useBuiltInExcludes === "file and search excludes";
}

function shouldUseBuiltInSearchExcludes()
{
    var useBuiltInExcludes = vscode.workspace.getConfiguration( 'tag-tree.filtering' ).useBuiltInExcludes;
    return useBuiltInExcludes === "search excludes" || useBuiltInExcludes === "file and search excludes";
}

function shouldIgnoreGitSubmodules()
{
    return vscode.workspace.getConfiguration( 'tag-tree.filtering' ).ignoreGitSubmodules;
}

function shouldCompactFolders()
{
    return vscode.workspace.getConfiguration( 'explorer' ).compactFolders &&
        vscode.workspace.getConfiguration( 'tag-tree.tree' ).disableCompactFolders !== true;
}

function shouldHideFromTree( tag )
{
    return attributes.getAttribute( tag, 'hideFromTree', false );
}

module.exports.init = init;
module.exports.shouldExpand = shouldExpand;
module.exports.shouldFlatten = shouldFlatten;
module.exports.shouldShowTagsOnly = shouldShowTagsOnly;
module.exports.shouldShowCounts = shouldShowCounts;
module.exports.showFilterCaseSensitive = showFilterCaseSensitive;
module.exports.isRegexCaseSensitive = isRegexCaseSensitive;
module.exports.showBadges = showBadges;
module.exports.regex = regex;
module.exports.ripgrepPath = ripgrepPath;
module.exports.tags = tags;
module.exports.shouldSortTagsOnlyViewAlphabetically = shouldSortTagsOnlyViewAlphabetically;
module.exports.labelFormat = labelFormat;
module.exports.tooltipFormat = tooltipFormat;
module.exports.shouldShowHighlights = shouldShowHighlights;
module.exports.shouldIgnoreGitSubmodules = shouldIgnoreGitSubmodules;
module.exports.shouldCompactFolders = shouldCompactFolders;
module.exports.shouldUseBuiltInFileExcludes = shouldUseBuiltInFileExcludes;
module.exports.shouldUseBuiltInSearchExcludes = shouldUseBuiltInSearchExcludes;
module.exports.shouldHideFromTree = shouldHideFromTree;
