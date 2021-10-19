module.exports = {
    isAuth() {
        return (req, res, next) => {
            if (!req.user) {
                res.status(401).json({ message: 'Please sign in.' })
            } else {
                next();
            }
        }
    },
    isGuest() {
        return (req, res, next) => {
            if (req.user) {
                res.status(400).json({ message: 'You are already sign in.' })
            } else {
                next();
            }
        }
    },
    isOwner() {
        return (req, res, next) => {
            const item = req.data;
            if (req.user._id != item.owner._id) {
                res.status(403).json({ message: 'You cannot modify this record.' })
            } else {
                next();
            }
        }
    },
    isAdmin() {
        return (req, res, next) => {
            if (req.user._id !== '616e85aac44ed01982270d98') {
                res.status(403).json({ message: 'Only admin can post matches.' })
            } else {
                next();
            }
        }
    }
}