import React from 'react'
import { IKImage, IKContext, IKUpload } from 'imagekitio-react'
import axios from "axios";


const Index = () => {

    const publicKey = "public_UKtVMhvUccOyB2iOzPm9AzW4lao=";
    const urlEndpoint = "https://ik.imagekit.io/linkhub";
    const authenticationEndpoint = 'http://localhost:5757/api/v1/imagekit/auth';
    
    async function handleAuth(){
        const res = await axios.get(authenticationEndpoint)
        return res.data
      }
    
      const onUploadStart = (evt:any) => {
        console.log('Started', evt);
      };
      
      const onUploadProgress = (evt:any) => {
        console.log('Progress: ', evt);
      };
      
      const onError = (err:any) => {
        console.log('Error');
        console.log(err);
      };
      
      const onSuccess = (res:any) => {
        console.log('Success');
        console.log(res);
      };
    

  return (
    <div>
                  <IKContext publicKey={publicKey} urlEndpoint={urlEndpoint} authenticator={handleAuth}>
            {/* <IKImage /> */}
            <IKUpload 
              fileName={"imagemlinda.png"}
              tags={["tag1"]}
              useUniqueFileName={true}
              isPrivateFile={false}
              onError={onError}
              onSuccess={onSuccess}
              onUploadStart={onUploadStart}
              onUploadProgress={onUploadProgress}
            />
          </IKContext>
    </div>
  )
}

export default Index