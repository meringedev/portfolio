function get_prop(obj, path) {
    const prop = path.split('.');
    for (let i=0; i < prop.length; i++) {
        if (!obj) {
            return null;
        }
        obj = obj[prop[i]];
    }
    if (typeof obj === 'undefined') {
        obj = null;
    }
    return obj;
}

export default get_prop;