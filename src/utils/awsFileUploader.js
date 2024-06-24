import AWS from 'aws-sdk';

export const uploadFile = async (file) => {
  
    const S3_BUCKET = process.env.S3_BUCKET;
    const REGION = process.env.REGION_NAME;

    AWS.config.update({
      accessKeyId: process.env.AWS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
    });
    const s3 = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });

    const params = {
      Bucket: S3_BUCKET,
      Key: `badges/file_${Date.now()}${file.name.slice(file.name.lastIndexOf("."))}`,
      Body: file,
    };

    var upload = s3
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        console.log(
          "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
        );
      })
      .promise();

    const response = await upload;
    return `https://patasbucket.s3.sa-east-1.amazonaws.com/${params.Key}`
  };
