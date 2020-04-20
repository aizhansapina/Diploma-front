import { useHistory, useParams } from 'react-router-dom';
import React, { useEffect } from 'react';


export const ActivationPage = (props) => {
  const history = useHistory();
  const { uuid } = useParams();

  useEffect(() => {
    if (uuid) {
      fetch(`http://198.199.121.47/auth/activations/activate/${uuid}`)
        .then(() => {
          history.push('/login-page')
        })
    }
  }, [history, uuid])

  return (
    <div>
      aasd
    </div>
  )

}