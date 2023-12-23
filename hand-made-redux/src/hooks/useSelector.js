import { useEffect, useState } from "react";

import store from "../store";

const useSelector = (sliceName) => {
  const [state, setState] = useState(store[sliceName].value);

  useEffect(() => {
    const unsubid = store[sliceName].subscribe(setState);

    return () => {
      store[sliceName].unsubscribe(unsubid);
    };
  }, [sliceName]);

  return state;
};

export default useSelector;
