/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Flex, Link } from "theme-ui";
import iconsObj from "../../assets/icons";
import Icon from "../icon";
import Image from "next/image";

interface Social {
  img: Icon;
}
const socialIcon: Social[] = [
  { img: iconsObj.twitter },
  { img: iconsObj.facebook },
  { img: iconsObj.github },
  { img: iconsObj.telegram },
];

export const SocialLink = () => {
  return (
    <Flex>
      {socialIcon.map((el: any, i: number) => {
        return (
          <Link key={i} sx={{ marginRight: "16px", cursor: "pointer" }}>
            <Image src={el.img} width={24} alt="socialIcon" />
          </Link>
        );
      })}
    </Flex>
  );
};
