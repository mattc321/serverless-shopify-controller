function main(args) {
    let extensionName = args.route || 'myExtension'
    return {
        "body" : {
            "result": extensionName + ' uninstalled'
        }
    }
}

exports.main = main
