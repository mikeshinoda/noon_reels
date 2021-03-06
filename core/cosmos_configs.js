const config = {
    endpoint: process.env.AZURE_COSMOS_ENDPOINT,
    key: process.env.AZURE_COSMOS_PRIMARY_KEY,
    databaseId: process.env.AZURE_COSMOS_DATABASE_ID,
    containerId: process.env.AZURE_COSMOS_CONTAINER_ID,
    hashtagContainerId: process.env.AZURE_COSMOS_HASHTAGS_CONTAINER_ID,
    notebooksContainerId: process.env.AZURE_COSMOS_NOTEBOOKS_CONTAINER_ID,
    userReelsContainerId: process.env.AZURE_COSMOS_USER_NOTES_CONTAINER_ID,
    partitionKey: { kind: "Hash", paths: [process.env.AZURE_COSMOS_PARTITION_KEY] },
    hashtagPartitionKey: { kind: "Hash", paths: [process.env.AZURE_COSMOS_HASHTAG_PARTITION_KEY] },
    userReelsPartitionKey: { kind: "Hash", paths: [process.env.AZURE_COSMOS_USER_NOTES_PARTITION_KEY] }
  };
  
  module.exports = config;