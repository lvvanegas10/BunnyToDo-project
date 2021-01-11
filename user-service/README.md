Restful serverless microservice to create Users and attach tasks to them.

1. Before you start, you should install NodeJS and its package manager npm. Also, you need to create an AWS account.

2. Install serverless globally.

```
npm install -g serverless
```

3. Install the project requirements. This will install some packages and a plugging for user API Gateway Dedicated Cache **(You can enable this caché in the serverless.yml, it is disabled to avoid extra charges in AWS)**.

```
npm install
```

4. Create VPC and private subnet in AWS and add a security group.

5. To connect the resources of the private subnet to the Database (DynamoDB), you need to create a VPN Endpoint and configure the Router.

6. Configure default AWS credentials

```
serverless config credentials --provider aws --key <key> --secret  <secret>
```

7. Deploy architecture.

```
sls deploy -v
```
