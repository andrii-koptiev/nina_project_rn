import React from 'react';
import { Button } from '@rneui/themed';

const LoginScreen: React.FC = () => {
  return (
    <Button
      title='Outline'
      type='outline'
      containerStyle={{
        width: '80%',
        marginHorizontal: 50,
        marginVertical: 10,
      }}
      buttonStyle={{
        backgroundColor: 'rgba(78, 116, 289, 1)',
        borderRadius: 3,
      }}
    />
  );
};

export default LoginScreen;
