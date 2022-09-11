import React from "react";

const useDynamicSchema = () => {
    const schema = React.useRef({});
    const addField = React.useCallback(
      (payload) => {
        const entries = Object.entries(payload);
        if (schema.current[entries[0][0]]) return
        else schema.current[entries[0][0]] = entries[0][1]
      },
      [],
    )
    return {schema: schema.current, addField}
}

export default useDynamicSchema