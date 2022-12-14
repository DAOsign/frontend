import React, { useEffect, useRef } from "react";
import { Box, ThemeUIStyleObject } from "theme-ui";
// @ts-ignore
import Jazzicon from "@metamask/jazzicon";

interface Props {
  account: string | null;
  size: number;
  sx: ThemeUIStyleObject;
}

const Identicon = ({ account, size, sx = {} }: Props) => {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    if (account && ref.current) {
      ref.current.innerHTML = "";
      ref.current.appendChild(Jazzicon(size || 16, parseInt(account.slice(2, 10), 16)));
    }
  }, [account, size]);

  return account ? <Box ref={ref as any} sx={sx} /> : null;
};

export default Identicon;
