import React, { useState} from "react";
import { Container, Flex, Text, Radio, Label, Box , Button} from 'theme-ui'
import Icon from '../../../icon/index'
import {card, flex} from '../styles'
import iconsObj from "../../../../assets/icons";
import TextEditor from '../../../TextEditor/index'

const Hash = require('ipfs-only-hash')

const agreementLocations = [{
  name: 'Cloud',
  value: 'cloud',
},
{
  name: 'Public IPFS',
  value: 'publicIPFS',
},
{
  name: 'Private IPFS',
  value: 'privateIPFS',
},
{
  name: 'Local',
  value: 'local',
}]

const UploadLocalAgreement = ({setCloud, cloud, setRdioValue}: {setCloud: any, cloud: boolean, setRdioValue: any}) => {
  const [bytes, setBytes] = useState<Uint8Array>()
  const [name, setName ] = useState('')
  async function readFile(target : any) {
  let file = target.files[0] as File;
  if(target.files[0]) {
    setName(target.files[0].name)
    const buffer = await file.arrayBuffer()
    const bytes = new Uint8Array(buffer) 
    setBytes(bytes)
  } 
}

const ipfs= async () => {
  const hash = await Hash.of(bytes)
  console.log(hash);
}

  return <Container>
    <Flex sx={{alignItems: 'center'}}>
    <Text sx={{variant: 'forms.label', minWidth: '200px'}}>Upload agreement</Text>
    <Button onClick={() => {
      setCloud(!cloud)
      setRdioValue('cloud')
    }}  
      sx={{variant: 'buttons.back'}}>
        <Icon style={{display: 'block'}} src={iconsObj.arrowLeftPink}/>
        <Text sx={{display: 'block'}}>Choose another method</Text>
    </Button>
    </Flex>
   <form id="upload-container" method="POST" action="send.php">
      <Box sx={{textAlign: 'center', border:'1px dashed #D8D8E2', borderRadius: '12px', position: 'relative',   width: '440px',  height: '140px'}}>
          <input 
            lang='en' 
            onChange={({target}) => readFile(target)} 
            className='file' 
            id='file'
            type="file"
            name="file" 
            />
           {name   
           ? <Text sx={{variant: 'text.smallTextMedium', opacity: 1, display: 'block' }}>{name}
             {bytes && <button style={{ marginTop: '50px', zIndex: 10, marginLeft: '5px' }} type='button' onClick={ipfs}>hash ipfs</button>}
           </Text> 
           : <Text sx={{variant: 'text.smallTextMedium', opacity: 1, mt: '48px', display: 'block'}}>Upload Agreement file using Drag & Drop  <br/> or 
           <span style={{color: '#CA5CF2'}}>  Choose File</span>
          </Text>
          }
      </Box>
  </form>

  </Container>
}

export default function StepTwo() {
  const [cloud, setCloud] = useState(true)
  const [radioValue, setRdioValue] = useState('cloud')

   const variantsAgreement = {
    'cloud': <CloudContent setCloud={setCloud} cloud={cloud}/>,
    'local': <UploadLocalAgreement setCloud={setCloud} cloud={cloud} setRdioValue={setRdioValue}/>
   }

  return (
    <Container sx={{maxWidth: '440px', textAlign: 'left'}}>
      <Text sx={{variant: 'forms.label', mr: 'auto', display: 'block', maxWidth: '150px', mb: '5px'}}>
        Agreement location <Icon width='12px' height='12px' style={{opacity: 0.5}} src={iconsObj.infoCircle}/>
      </Text>
      <Box  as='form'
        onSubmit={(e) => e.preventDefault()}>
      <Flex sx={{mb: '24px', justifyContent: 'space-between'}}>
        {agreementLocations.map(el => {
          return <Label 
            key={el?.name} 
            sx={{
              justifyContent: 'space-between',
              width: 'inherit', 
              opacity: 1, 
              ...flex, 
            }}  
            onClick={() => setRdioValue(el.value)}>
          <Icon width='16px' src={radioValue === el.value ? iconsObj.radioOn : iconsObj.radioOff}/>
          <Radio 
             sx={{boxShadow: 'none'}} 
             name='letter' value={el.value}/> 
             <Text sx={{ml: '5px', variant: 'text.normalTextMedium'}}>{el.name}</Text>
        </Label>
        })}
      </Flex>
      </Box>
      <Box>
      {variantsAgreement[radioValue]}
      </Box>
    </Container>
  );
}

const CloudContent = ({setCloud, cloud}: {setCloud: any, cloud: boolean}) => {
return  (<> {cloud ? <Flex sx={{justifyContent: 'space-between'}}> 
    <Container onClick={() => setCloud(!cloud)}  sx={{...card, cursor: 'pointer'}}>
        <div style={{width: '50px', height: '50px', margin: '0 auto'}}>
            <Icon width='50px' height='50px' src={iconsObj.uploadCloudPrimary}/>
        </div>
        <Text sx={{variant: 'text.largeTextBold', lineHeight: '120%', mt:'24px', mb:'20px'}}>Upload Agreement</Text>
        <Text sx={{variant: 'text.smallTextMedium', maxWidth: '160px', opacity: 1}}>
          Upload file of a type PDF, DOCX, TXT
        </Text>
    </Container>
    <Container onClick={() => setCloud(!cloud)} sx={{...card, cursor: 'pointer'}}>
        <div style={{width: '50px', height: '50px', margin: '0 auto'}}>
            <Icon width='50px' height='50px' src={iconsObj.fileSecondarysvg}/>
        </div>
        <Text sx={{variant: 'text.largeTextBold', mb:'20px',  mt:'24px'}}>Enter Agreement</Text>
        <Text sx={{variant: 'text.smallTextMedium', maxWidth: '160px' , opacity: 1}}>
            Enter Text or Markdown content for the Agreement
        </Text>
    </Container>
  </Flex>
  :
  <TextEditor setCloud={setCloud} cloud={cloud}/>}
</>)
}