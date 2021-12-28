const useFullscreen = function (target, options = {}) {
    const {document = defaultDocument} = options;
    const targetRef = target || (document == null ? void 0 : document.querySelector("html"));
    const isFullscreen = vueDemi.ref(false);
    let isSupported = false;
    let map = functionsMap[0];
    if (!document) {
        isSupported = false;
    } else {
        for (const m of functionsMap) {
            if (m[1] in document) {
                map = m;
                isSupported = true;
                break;
            }
        }
    }
    const [REQUEST, EXIT, ELEMENT, , EVENT] = map;

    async function exit() {
        if (!isSupported)
            return;
        if (document == null ? void 0 : document[ELEMENT])
            await document[EXIT]();
        isFullscreen.value = false;
    }

    async function enter() {
        if (!isSupported)
            return;
        await exit();
        const target2 = unrefElement(targetRef);
        if (target2) {
            await target2[REQUEST]();
            isFullscreen.value = true;
        }
    }

    async function toggle() {
        if (isFullscreen.value)
            await exit();
        else
            await enter();
    }

    if (document) {
        useEventListener(document, EVENT, () => {
            isFullscreen.value = !!(document == null ? void 0 : document[ELEMENT]);
        }, false);
    }
    return {
        isSupported,
        isFullscreen,
        enter,
        exit,
        toggle
    };
}
export {useFullscreen}
