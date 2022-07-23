const core = require('@actions/core');
const codeArtifact = require('@aws-sdk/client-codeartifact');

async function run() {
  const region = core.getInput('region', { required: true });
  const domain = core.getInput('domain', { required: true });
  const owner = core.getInput('owner', { required: true });
  const duration = core.getInput('duration', { required: false });
  const repo = core.getInput('codeartifact-repo', { required: true });
  core.setFailed('stopping here');
  throw Error('stop here');

  const client = new codeArtifact.CodeartifactClient({ region: region });
  const authCommand = new codeArtifact.GetAuthorizationTokenCommand({
    domain: 'dne',
    domainOwner: '12345',
    durationSeconds: duration
  });

  core.debug(`::debug:: AWS CodeArtifact Login(Auth) ${domain}-${owner}`);

  const response = await client.send(authCommand);
  const authToken = response.authorizationToken;
  if (response.authorizationToken === undefined) {
    
    const errMsg = `AWS CodeArtifact Authentication Failed: ${response.$metadata.httpStatusCode} (${response.$metadata.requestId})`;
    core.setFailed(errMsg);
    throw Error(errMsg);
  }

  core.setOutput('registry', `https://${domain}-${owner}.d.codeartifact.${region}.amazonaws.com`);
  core.setOutput('auth-token', authToken);
  // core.setSecret(authToken);
  core.debug(`::debug:: https://${domain}-${owner}.d.codeartifact.${region}.amazonaws.com`);
  core.debug(`::debug:: ${authToken.length}`);
}
