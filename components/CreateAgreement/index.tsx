<<<<<<< HEAD
import React, { useState } from "react";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import { Container, Flex, Text } from "theme-ui";
import LeftSide from "./LeftSide";
import { rightSide, leftSide, containerSides, title } from "./styles";
=======
import React, {useState} from 'react'
import StepOne from './Steps/StepOne'
import StepTwo from './Steps/StepTwo'
import StepThree from './Steps/StepThree'
import {Container, Flex, Text } from 'theme-ui'
import LeftSide from './LeftSide'
import {rightSide, leftSide, containerSides, title} from './styles'
>>>>>>> 3cd6dc35758ab2c422d2171a3e30abd7cdcd9291

export default function CreateAgreement() {
  const [step, setStep] = useState(1);

  const steps = {
    1: <StepOne />,
    2: <StepTwo />,
    3: <StepThree />,
  };

<<<<<<< HEAD
  return (
    <Flex sx={containerSides}>
      <Container sx={leftSide}>
        <Text sx={title}> Create New Agreement</Text>
        {steps[step]}
      </Container>
      <Container sx={rightSide}>
        <LeftSide step={step} setStep={setStep} />
      </Container>
    </Flex>
  );
}
=======
    return (
       <Flex sx={containerSides}>
         <Container sx={leftSide}>
         <Text sx={title}> Create New Agreement</Text>
           {steps[step]}
         </Container>
         <Container sx={rightSide}>
           <LeftSide step={step} setStep={setStep}/>
         </Container>
       </Flex>
    )
  }
  
>>>>>>> 3cd6dc35758ab2c422d2171a3e30abd7cdcd9291
