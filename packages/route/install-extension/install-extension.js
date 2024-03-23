function main(args) {
    let extensionName = args.route || 'myExtension'
    return {
        "body" : {
            "result": extensionName + ' installed'
        }
    }
}

exports.main = main
