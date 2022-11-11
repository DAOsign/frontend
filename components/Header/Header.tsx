import React from "react";
import { Flex, Text } from 'theme-ui'
import iconsObj from "../../assets/icons";
import {formatAddress} from '../../utils/formats'
import Icon from "../icon";
import Logo from "../Logo";


export default function Footer() {
  return (
  <div style={{width: '100%', height: '80px', paddingLeft: '40px', paddingRight: '40px', backgroundColor: '#FFFFFF', paddingTop: '16px', position: 'fixed', top: 0}}>
    <Flex sx={{justifyContent: 'space-between' }}>
      <Logo margin='0 0 auto 0'/>
      <Flex sx={{alignItems: 'center'}}>
        <div style={{width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#F7F7FB', textAlign:'center', paddingTop: '9px', cursor: 'pointer'}}> 
          <Icon src={iconsObj.Bell}/>
        </div>
        <Flex sx={{alignItems: 'center',  backgroundColor: '#F7F7FB', height: '44px', paddingX: '12px', borderRadius: '80px', ml: '20px', cursor: 'pointer'}}>
            <div style={{width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#000', marginRight: '8px'}}> 
            {/* <Icon src={iconsObj.Bell}/> */}
            </div>
            <Text>
              {formatAddress('0x131A7213eCa51E2393e71eF1fDb240F8CC75DDcb')}
            </Text>
        </Flex>
      </Flex>
    </Flex>
  </div>
  );
}
