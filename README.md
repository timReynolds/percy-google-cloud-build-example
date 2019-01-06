# Percy.io Google Cloud Build (GCB) Example

This repository demonstrates the basics of enabling percy.io within Google Cloud Build. 

Unlike other build each step runs inside it's own container requiring the percy step to be within a container that supports puppeteer, in this case [buildkites puppeteer](https://github.com/buildkite/docker-puppeteer) image. 

The `cloudbuild.yaml` doesn't include all steps you'd expect for a production build but instead just he bare minimal to run percy with a token. The commands required to encrypt your percy token with Cloud KMS are outlined below, a full explanation of encrypted resources is included in the [cloud build documentation](https://cloud.google.com/cloud-build/docs/securing-builds/use-encrypted-secrets-credentials). 

*Warning: This example uses the google npm cloud builder for the npm install step and buildkite's puppeteer image to run percy. In a production setup I'd recommend ensuring the underlying node image uses the same linux distribution to ensure incompatibility issues of any binaries build via npm install by creating your own cloud builder images. Alternately use the buildkite image to perform all node related steps*

### Encrypt percy token with KMS

The following steps will create a new keyring, cryptokey and provide the cloud build service account access to the key. Before running ensure the KMS API is enabled in your project. 

The outputted base64 string can then be included in your cloudbuild.yaml file. 

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