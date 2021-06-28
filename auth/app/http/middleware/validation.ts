import compose from "composable-middleware" 
export class ValidationMiddleware {
    validateUser() {
        return (
            compose()
                .use((req, res, next) => {
                    // const validateImages = new ValidateImages();
                    // validateImages.validate(req.user.id, {
                    //     error: (msg) => Sender.errorSend(res, { success: false, status: 409, msg }),
                    //     next: (count) => { req.body.alreadyUploaded = count; next() }
                    // })
                    next();
                })
        )
    }
}
