# Todo Tree

[![Build Status](https://travis-ci.org/Gruntfuggly/tagexplorer.svg?branch=master)](https://travis-ci.org/Gruntfuggly/tagexplorer)

This extension quickly searches (using [ripgrep](href="https://github.com/BurntSushi/ripgrep)) your workspace for comment tags like TODO and FIXME, and displays them in a tree view in the explorer pane. Clicking a TODO within the tree will open the file and put the cursor on the line containing the TODO.

Found TODOs can also be highlighted in open files.

*Please see the [wiki](https://github.com/Gruntfuggly/tagexplorer/wiki/Configuration-Examples) for configuration examples.*

![screenshot](https://raw.githubusercontent.com/Gruntfuggly/tagexplorer/master/resources/screenshot.png)

*Notes:*

- *The tree will only appear in the explorer pane when the extension finds some TODOs, unless* `tagexplorer.tree.hideTreeWhenEmpty` *is set to false.*
- *User* `rg.conf` *files are ignored.*

## Highlighting

Highlighting tags is configurable. Use `defaultHighlight` to set up highlights for all tags. If you need to configure individual tags differently, use `customHighlight`. If settings are not specified in `customHighlight`, the value from `defaultHighlight` is used. If a setting is not specified in `defaultHighlight` then the older, deprecated `icon`, `iconColour` and `iconColours` settings are used.

Both `defaultHighlight` and `customHighlight` allow for the following settings:

`foreground` - used to set the foreground colour of the highlight in the editor and the marker in the ruler.

`background` - used to set the background colour of the highlight in the editor.

*Note: Foreground and background colours can be one of "red", "green", "blue", "yellow", "magenta", "cyan", "grey", "white" or "black". RGB values can also be used (e.g. "#80FF00"). You can also use colours from the current theme, e.g. `peekViewResult.background`.*

`opacity` - percentage value used with the background colour. 100% will produce an opaque background which will obscure selection and other decorations. *Note: opacity is ignored when theme colours are used.*

`fontWeight`, `fontStyle`, `textDecoration` - can be used to style the highlight with standard CSS values.

`borderRadius` - used to set the border radius of the background of the highlight.

`icon` - used to set a different icon in the tree view. Must be a valid octicon (see <https://octicons.github.com>) or codicon (see <https://microsoft.github.io/vscode-codicons/dist/codicon.html>). If using codicons, specify them in the format "$(*icon*)". The icon defaults to a tick if it's not valid. You can also use "tagexplorer", or "tagexplorer-filled" if you want to use the icon from the activity view.

`iconColour` - used to set the colour of the icon in the tree. If not specified, it will try to use the foreground colour, the background colour and then the older settings, in that order.

`gutterIcon` - set to true to show the icon in the editor gutter.

`rulerColour` - used to set the colour of the marker in the overview ruler. If not specified, it will default to use the foreground colour.

`rulerLane` - used to set the lane for the marker in the overview ruler. If not specified, it will default to the right hand lane. Use one of "left", "center", "right", or "full". You can also use "none" to disable the ruler markers.

`type` - used to control how much is highlighted in the editor. Valid values are:

- `tag` - highlights just the tag
- `text` - highlights the tag and any text after the tag
- `tag-and-comment` - highlights the comment characters (or the start of the match) and the tag
- `text-and-comment` - highlights the comment characters (or the start of the match), the tag and the text after the tag
- `line` - highlights the entire line containing the tag
- `whole-line` - highlights the entire line containing the tag to the full width of the editor

`hideFromTree` - used to hide tags from the tree, but still highlight in files

Example:

```json
"tagexplorer.highlights.defaultHighlight": {
    "icon": "alert",
    "type": "text",
    "foreground": "red",
    "background": "white",
    "opacity": 50,
    "iconColour": "blue"
}
```

*Note: The highlight configuration is separate from the settings for the search.

## Installing

You can install the latest version of the extension via the Visual Studio Marketplace [here](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.tagexplorer).

Alternatively, open Visual Studio code, press `Ctrl+P` or `Cmd+P` and type:

    > ext install Gruntfuggly.tagexplorer

*Note: Don't forget to reload the window to activate the extension!*

### Source Code

The source code is available on GitHub [here](https://github.com/Gruntfuggly/tagexplorer).

## Controls

The tree view header can contain the following buttons:

![collapse](https://raw.githubusercontent.com/Gruntfuggly/tagexplorer/master/resources/button-icons/collapse.png) - Collapse all tree nodes<br>
![expand](https://raw.githubusercontent.com/Gruntfuggly/tagexplorer/master/resources/button-icons/expand.png) - Expand all tree nodes<br>
![flat](https://raw.githubusercontent.com/Gruntfuggly/tagexplorer/master/resources/button-icons/flat.png) - Show the tree view as a flat list, with the full filename for each TODO<br>
![tags](https://raw.githubusercontent.com/Gruntfuggly/tagexplorer/master/resources/button-icons/tags.png) - Show the view as a list of tags<br>
![tree](https://raw.githubusercontent.com/Gruntfuggly/tagexplorer/master/resources/button-icons/tree.png) - Show the tree view as a tree with expandable nodes for each folder (default)<br>
![tag](https://raw.githubusercontent.com/Gruntfuggly/tagexplorer/master/resources/button-icons/tag.png) - Group the TODOs in the tree by the tag<br>
![notag](https://raw.githubusercontent.com/Gruntfuggly/tagexplorer/master/resources/button-icons/notag.png) - Organise the TODOs by file (default)<br>
![filter](https://raw.githubusercontent.com/Gruntfuggly/tagexplorer/master/resources/button-icons/filter.png) - Only show items in the tree which match the entered filter text<br>
![clear-filter](https://raw.githubusercontent.com/Gruntfuggly/tagexplorer/master/resources/button-icons/clear-filter.png) - Remove any active filter<br>
![refresh](https://raw.githubusercontent.com/Gruntfuggly/tagexplorer/master/resources/button-icons/refresh.png) - Rebuild the tree<br>
![scan-open-files](https://raw.githubusercontent.com/Gruntfuggly/tagexplorer/master/resources/button-icons/scan-open-files.png) - Show tags from open files only<br>
![scan-workspace](https://raw.githubusercontent.com/Gruntfuggly/tagexplorer/master/resources/button-icons/scan-workspace.png) - Show tags from workspace<br>
![scan-current-file](https://raw.githubusercontent.com/Gruntfuggly/tagexplorer/master/resources/button-icons/reveal.png) - Show the current file in the tree<br>

## Folder Filter Context Menu

Right clicking on a folder in the tree will bring up a context menu with the following options:

**Hide This Folder** - removes the folder from the tree

**Only Show This Folder** - remove all other folders and subfolders from the tree

**Only Show This Folder And Subfolders** - remove other folders from the tree, but keep subfolders

**Reset Folder Filter** - reset any folders previously filtered using the above

*Note: The current filters are shown in the debug log. Also, the filter can always be reset by right clicking the **Nothing Found** item in the tree. If your tree becomes invisible because everything is filtered and `hideTreeWhenEmpty` is set to true, you can reset the filter by pressing **F1** and selecting the **Todo Tree: Reset Folder Filter** command.*

## Commands

### Tags

To make it easier to configure the tags, there are two commands available:

**Todo Tree: Add Tag** - allows entry of a new tag for searching

**Todo Tree: Remove Tag** - shows a list of current tags which can be selected for removing

*Note: The Remove Tag command can be used to show current tags - just press Escape or Enter with out selecting any to close it.*

## Configuration

The extension can be customised as follows (default values in brackets):

**tagexplorer.general.debug** (`false`)<br/>
Show a debug channel in the output view.

**tagexplorer.general.enableFileWatcher** (`false`)<br/>
Set this to true to turn on automatic updates when files in the workspace are created, changed or deleted.

**tagexplorer.general.rootFolder** (`""`)<br/>
By default, any open workspaces will have a tree in the view. Use this to force another folder to be the root of the tree. You can include environment variables and also use ${workspaceFolder}. e.g.<br/>
`"tagexplorer.general.rootFolder": "${workspaceFolder}/test"`<br/>
or<br/>
`"tagexplorer.general.rootFolder": "${HOME}/project"`.<br/>
*Note: Other open files (outside of the rootFolder) will be shown (as they are opened) with their full path in brackets.*

**tagexplorer.filtering.includeGlobs** (`[]`)<br/>
Globs for use in limiting search results by inclusion, e.g. `[\"**/unit-tests/*.js\"]` to only show .js files in unit-tests subfolders. [Globs help](https://code.visualstudio.com/api/references/vscode-api#GlobPattern). *Note: globs paths are absolute - not relative to the current workspace.*

**tagexplorer.filtering.excludeGlobs** (`[]`)<br/>
Globs for use in limiting search results by exclusion (applied after **includeGlobs**), e.g. `[\"**/*.txt\"]` to ignore all .txt files

**tagexplorer.filtering.includedWorkspaces** (`[]`)<br/>
A list of workspace names to include as roots in the tree (wildcards can be used). An empty array includes all workspace folders.

**tagexplorer.filtering.excludedWorkspaces** (`[]`)<br/>
A list of workspace names to exclude as roots in the tree (wildcards can be used).

**tagexplorer.filtering.passGlobsToRipgrep** (`true`)<br/>
Set this to false to apply the globs *after* the search (legacy behaviour).

**tagexplorer.filtering.useBuiltInExcludes** (`none`)<br/>
Set this to use VSCode's built in files or search excludes. Can be one of `none`, `file excludes` (uses Files:Exclude), `search excludes` (Uses Search:Exclude) or `file and search excludes` (uses both).

**tagexplorer.filtering.ignoreGitSubmodules** (`false`)<br/>
If true, any subfolders containing a `.git` file will be ignored when searching.

**tagexplorer.filtering.includeHiddenFiles** (`false`)<br/>
If true, files starting with a period (.) will be included.

**tagexplorer.highlights.enabled** (`true`)<br/>
Set this to false to turn off highlighting.

**tagexplorer.highlights.highlightDelay** (`500`)<br/>
The delay before highlighting (milliseconds).

**tagexplorer.highlights.defaultHighlight** (`{}`)<br/>
Set default highlights. Example:

```json
{
    "foreground": "white",
    "background": "red",
    "icon": "check",
    "type": "text"
}
```

**tagexplorer.highlights.schemes** (`['file','untitled']`)<br/>
Editor schemes to show highlights in. To show highlights in settings files, for instance, add `vscode-userdata` or for output windows, add `output`.

**tagexplorer.regex.regex** (<tt>&#x22;&#x28;&#x28;&#x2f;&#x2f;&#x7c;&#x23;&#x7c;&#x3c;&#x21;&#x2d;&#x2d;&#x7c;&#x3b;&#x7c;&#x2f;&#x5c;&#x5c;&#x2a;&#x29;&#x5c;&#x5c;&#x73;&#x2a;&#x28;&#x24;&#x54;&#x41;&#x47;&#x53;&#x29;&#x7c;&#x5e;&#x5c;&#x5c;&#x73;&#x2a;&#x2d;&#x20;&#x5c;&#x5c;&#x5b;&#x20;&#x5c;&#x5c;&#x5d;&#x29;&#x22;</tt>)<br/>
This defines the regex used to locate TODOs. By default, it searches for tags in comments starting with <tt>&#47;&#47;</tt>, <tt>#</tt>, <tt>;</tt>, <tt>&lt;!--</tt> or <tt>&#47;*</tt>. This should cover most languages. However if you want to refine it, make sure that the <tt>($TAGS)</tt> is kept. The second part of the expression allows matching of Github markdown task lists. *Note: This is a [Rust regular expression](https://docs.rs/regex/1.0.0/regex)</a>, not javascript.*

**tagexplorer.regex.regexCaseSensitive** (`true`)<br/>
Set to false to allow tags to be matched regardless of case.

**tagexplorer.ripgrep.ripgrep** (`""`)<br/>
Normally, the extension will locate ripgrep itself as and when required. If you want to use an alternate version of ripgrep, set this to point to wherever it is installed.

**tagexplorer.ripgrep.ripgrepArgs** (`"--max-columns=1000"`)<br/>
Use this to pass additional arguments to ripgrep. e.g. `"-i"` to make the search case insensitive. *Use with caution!*

**tagexplorer.ripgrep.ripgrepMaxBuffer** (`200`)<br/>
By default, the ripgrep process will have a buffer of 200KB. However, this is sometimes not enough for all the tags you might want to see. This setting can be used to increase the buffer size accordingly.

**tagexplorer.tree.showInExplorer** (`true`)<br/>
The tree is shown in the explorer view and also has it's own view in the activity bar. If you no longer want to see it in the explorer view, set this to false.

**tagexplorer.tree.hideTreeWhenEmpty** (`true`)<br/>
Normally, the tree is removed from the explorer view if nothing is found. Set this to false to keep the view present.

**tagexplorer.tree.filterCaseSensitive** (`false`)<br/>
Use this if you need the filtering to be case sensitive. *Note: this does not the apply to the search*.

**tagexplorer.tree.trackFile** (`true`)<br/>
Set to false if you want to prevent tracking the open file in the tree view.

**tagexplorer.tree.showBadges** (`true`)<br/>
Set to false to disable SCM status and badges in the tree. Note: This also unfortunately turns off themed icons.

**tagexplorer.tree.expanded<sup>*</sup>** (`false`)<br/>
Set to true if you want new views to be expanded by default.

**tagexplorer.tree.flat<sup>*</sup>** (`false`)<br/>
Set to true if you want new views to be flat by default.

**tagexplorer.tree.tagsOnly<sup>*</sup>** (`false`)<br/>
Set to true if you want new views with tags only by default.

**tagexplorer.tree.sortTagsOnlyViewAlphabetically** (`false`)<br/>
Sort items in the tags only view alphabetically instead of by file and line number.

**tagexplorer.tree.showCountsInTree** (`false`)<br/>
Set to true to show counts of TODOs in the tree.

**tagexplorer.tree.labelFormat** (`${tag} ${after}`)<br/>
Format of the TODO item labels. Available placeholders are `${line}`, `${column}`, `${tag}`, `${before}` (text from before the tag), `${after}` (text from after the tag), `${filename}`, `${filepath}` and `${afterOrBefore}` (use "after" text or "before" text if after is empty).

**tagexplorer.tree.scanMode** (`workspace`)<br/>
By default the extension scans the whole workspace (`workspace`). Use this to limit the search to only open files (`open files`) or only the current file (`current file`).

**tagexplorer.tree.showScanModeButton** (`false`)<br/>
Show a button on the tree view header to switch the scanMode (see above).

**tagexplorer.tree.disableCompactFolders** (`false`)<br/>
The tree will normally respect the VSCode's `explorer.compactFolders` setting. Set this to true if you want to disable compact folders in the todo tree.

**tagexplorer.tree.tooltipFormat** (`${filepath}, ${line}`)</br>
Format of the tree item tooltips. Uses the same placeholders as `tagexplorer.tree.labelFormat` (see above).

**tagexplorer.tree.buttons.reveal** (`true`)<br/>
Show a button in the tree view title bar to reveal the current item (only when track file is not enabled).

**tagexplorer.tree.buttons.scanMode** (`false`)<br/>
Show a button in the tree view title bar to change the Scan Mode setting.

**tagexplorer.tree.buttons.viewStyle** (`true`)<br/>
Show a button in the tree view title bar to change the view style (tree, flat or tags only).

**tagexplorer.tree.buttons.filter** (`true`)<br/>
Show a button in the tree view title bar allowing the tree to be filtered by entering some text.

**tagexplorer.tree.buttons.refresh** (`true`)<br/>
Show a refresh button in the tree view title bar.

**tagexplorer.tree.buttons.expand** (`true`)<br/>
Show a button in the tree view title bar to expand or collapse the whole tree.

**tagexplorer.tree.buttons.export** (`false`)<br/>
Show a button in the tree view title bar to create a text file showing the tree content.

<sup>*</sup>*Only applies to new workspaces. Once the view has been changed in the workspace, the current state is stored.*

### Excluding files and folders

To restrict the set of folders which is searched, you can define `tagexplorer.filtering.includeGlobs`. This is an array of globs which the search results are matched against. If the results match any of the globs, they will be shown. By default the array is empty, which matches everything. See [here](https://code.visualstudio.com/api/references/vscode-api#GlobPattern) for more information on globs. *Note: globs paths are absolute - not relative to the current workspace.*

To exclude folders/files from your search you can define `tagexplorer.filtering.excludeGlobs`. If the search results match any of these globs, then the results will be ignored.

You can also include and exclude folders from the tree using the context menu. This folder filter is applied separately to the include/exclude globs.

*Note: By default, ripgrep ignores files and folders from your `.gitignore` or `.ignore` files. If you want to include these files, set* `tagexplorer.ripgrep.ripgrepArgs` *to* `--no-ignore`.

## Known Issues

When there is no current workspace, default icons will be shown in the tree.

## Donate

If you find this extension useful, please feel free to donate [here](https://paypal.me/Gruntfuggly). Thanks!

### Credits

Uses a modified version of [ripgrep-js](https://www.npmjs.com/package/ripgrep-js).

Main icons originally made by [Freepik](http://www.freepik.com) from [www.flaticon.com](https://www.flaticon.com/) is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/)

Tree view icons made by [Vaadin](https://www.flaticon.com/authors/vaadin) from [www.flaticon.com](https://www.flaticon.com/) is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/)

Tag icons made by [Dave Gandy](https://www.flaticon.com/authors/dave-gandy) from [www.flaticon.com](https://www.flaticon.com/) is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/)

Tags Icon made by [Vectors Market](https://www.flaticon.com/authors/vectors-market) from [www.flaticon.com](https://www.flaticon.com/) is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/)

Reveal Icon made by [Gregor Cresnar](https://www.flaticon.com/authors/gregor-cresnar) from [www.flaticon.com](https://www.flaticon.com/)

Lots of the icons have now been updated by [johnletey](https://github.com/johnletey) to match the new VS Code 1.37.0 GUI. Much appreciated!
