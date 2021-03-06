"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    return {
        async style({ content, attributes, filename }) {
            const { default: transformer } = await Promise.resolve().then(() => __importStar(require('../transformers/globalStyle')));
            if (!attributes.global)
                return { code: content };
            return transformer({ content, filename });
        },
    };
};
