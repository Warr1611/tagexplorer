var testConfig = {
    shouldBeCaseSensitive: false,
    regexSource: "($TAGS)",
    tagList: [ "TODO" ],
    globsList: []
};
testConfig.regex = function()
{
    return {
        tags: this.tagList,
        regex: this.regexSource,
        caseSensitive: this.shouldBeCaseSensitive
    };
};
testConfig.globs = function()
{
    return this.globsList;
};
testConfig.tags = function()
{
    return this.tagList;
};

function getTestConfig()
{
    return Object.create( testConfig );
}

module.exports.getTestConfig = getTestConfig;