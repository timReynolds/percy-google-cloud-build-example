# Percy.io Google Cloud Build (GCB) Example

This repository demonstrates the basics of using percy.io within Google Cloud Build. To prove this works the percy project is set to public [accessible here](https://percy.io/timReynolds/percy-google-cloud-build-example).

Unlike other build environments each step runs inside it's own container requiring the percy step to run in a container that supports puppeteer. The default npm cloud builder image doesn't provide this support so instead [buildkites puppeteer](https://github.com/buildkite/docker-puppeteer) image is used. 

Cloud build uses a `cloudbuild.yaml` file for it's definition that can be found in this repository. It doesn't include all steps you'd expect for a production build but instead just the bare minimal to run percy including a encrypted token. 

Steps to encrypt your percy token with Cloud KMS are outlined below, a full explanation of encrypted resources with KMS are included in the [cloud build documentation](https://cloud.google.com/cloud-build/docs/securing-builds/use-encrypted-secrets-credentials). 

*Warning: This example uses the google npm cloud builder for the npm install step and buildkite's puppeteer image to run percy. In a production setup I'd recommend ensuring the two containers uses the same linux distribution to ensure compatibility. This is achived by either creating your own npm cloud builder with puppeteer support or alternately use the buildkite image to perform all node related steps*

### Encrypt percy token with KMS

The following `gcloud` commands will create a new keyring, cryptokey, provide the cloud build service account access to the key and lastly encrypt your percy token using the key. Before running ensure the KMS API is enabled in your GCP project. 

After execution include the outputted base64 string in your `cloudbuild.yaml` secrets section. 

```bash
KEYRING_NAME=percy-google-cloud-build-key-ring
KEY_NAME=percy-google-cloud-build-key
GCB_SERVICE_ACCOUNT=[SERVICE-ACCOUNT]@cloudbuild.gserviceaccount.com
PERCY_TOKEN=[TOKEN] # Only required if not already set  

gcloud kms keyrings create $KEYRING_NAME --location=global

gcloud kms keys create $KEY_NAME \
  --location=global \
  --keyring=$KEYRING_NAME \
  --purpose=encryption

gcloud kms keys add-iam-policy-binding \
    $KEY_NAME --location=global --keyring=$KEYRING_NAME \
    --member=serviceAccount:$GCB_SERVICE_ACCOUNT \
    --role=roles/cloudkms.cryptoKeyDecrypter

echo -n $PERCY_TOKEN | gcloud kms encrypt \ 
  --plaintext-file='-' \
  --ciphertext-file='-' \ 
  --location=global \
  --keyring=$KEYRING_NAME \
  --key=$KEY_NAME | base64
```