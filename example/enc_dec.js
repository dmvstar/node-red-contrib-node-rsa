const nodeRSA = require('node-rsa');
var json = {"test1" : "ok"};
var keyTextPrivate = "-----BEGIN RSA PRIVATE KEY-----\n\
MIIEpQIBAAKCAQEAthDhidETH3EUJ1ZRphDhTT2hiYW/mnBaWDkzML1KvHkUexEQ\n\
/Z9TRdwQwKIyE72hlrtqpJ9kklXTx0XWL9K43TMbReRb5Z+P6dZzldfYUxrXhC+x\n\
Cnk8N7xBJ7FK9QNMkZwh9DZR5c6MSOaiqBQV4VGAv6DJG2Gz1mxP2vfWuYa/xrM6\n\
rK2Oc0UZa/dbb6JVtuekTA9F06HlmFHdJ8dkqjqQa+NfpqPPu+gHH+jmPIwpoyS6\n\
mgQx6n2B4FV9Jl6XjzsM5MGnGmiEv44/xTAy405VHRO+bySD5wjeOFJPgzELXQyp\n\
0sg6C2se0rsqeG6n7Rx7khpEkVcENdFxv/GaLQIDAQABAoIBAQCJxFZVyc4VkaR1\n\
a7zW05kYsJUmkf19aJ0EeywAKox994UG5tAbik8h4rcOfO01wN2gSGsW7MHWdXmO\n\
JYtAnsxiHUT66ySaqdXlVPAbp7u6juobzVbDHR/y8NHArkiRBBERcbrDp8LrCRNg\n\
Kp1UX/Z6jAjHeGwU+yZxD36Rq85gjY1vPGgteqDrxBBM97/716eeKzj9uSVSdZHt\n\
JXB7A+CdtaevaPY7PBGp9tUVZyt7zZ6AcHvvtunLL+UhJPmwk2J5/kuoTRpCpM1E\n\
9+59MJFV3x1Iwo3yQOKzkESJYWNa1egyDCdX3uC8o2hMcBuvZWy0BKLBGaRwc/D2\n\
sQw1HQAFAoGBAOseAlLqtJLFGyZAYftlb+xdloYAmhnrjrRjIkMUR6NaxYtaEVEO\n\
giv96yeceSIQ2Cu7jDssPze8aEcDVQ7a+fNyNeP+etY3nB7jpYQHW9XtpF5Zmauu\n\
rAA0RezYm6xVP3N3ScaUqvRD4i8AYoFVmntbaaZqwQ4gNf3gJO6Obr0DAoGBAMY8\n\
nY9wEIVUPjyyGGslWNDsuvFzZatKrI9boI2l+bL7b2/5TUFiaBQnlW/ziceCxMhw\n\
blC1qM3rJq6Jy96xqWA3wapa0f89Jw6viJhIFC+p+mqax1fNguv2buwEbh6snPQM\n\
dJ2vyRLSB2q25YwsYNwZGh6hCR4wdGR+3k7OaS0PAoGAVEkvwBXPogXzE6Vk+sCE\n\
fRGX0nYIyF3/jH81WyK8A72Yr7ocFxjCZY7jbBHWAvZS6GqVfOkByLNMFpkFNwwd\n\
Kr64vwENfBn3Z8NoJIqWy3wjvocUZc16b6BNqPiF5iOxWW1cD0pgdqyXOw5CQec0\n\
OCCvIS+IAc5eTKK72qFI5Y0CgYEAjpVWtq7iEyQux7VJfveT1GIRbE2WGQhS6aH7\n\
7yYsXaIf2ygzew3u0mBOSgGfXhMeuxSzI/Ylfkbewbd3HawnqX8xGvjMBovTpep3\n\
kyB09HuMFFVTgEHfIx1TVwswsXtyQM8cqbagJ5tNnmIC5TmeSXD8qn8lccNkVEw0\n\
VfZ9C90CgYEAurFae5qktwsS2I6CGFzm9Qh6uRBhRIvq/nrAko/WhPtO694vk29+\n\
FuhqBdqMOVRWwWuGVFQUOvvdtlTGMIsuF7r82/0ddSLg7/UYkFQGN9dOY1VQQYMe\n\
B4AK3aiHKbTgtNaYc8+a91QvAR04IODxnec8mot0m1qddfGF++Ls2jI=\n\
-----END RSA PRIVATE KEY-----";

var key = new nodeRSA(keyTextPrivate);
var text = JSON.stringify(json);
const encrypted = key.encryptPrivate(text, 'base64');
console.log('encrypted: ', encrypted);

var keyTextPublic = "-----BEGIN PUBLIC KEY-----\n\
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAthDhidETH3EUJ1ZRphDh\n\
TT2hiYW/mnBaWDkzML1KvHkUexEQ/Z9TRdwQwKIyE72hlrtqpJ9kklXTx0XWL9K4\n\
3TMbReRb5Z+P6dZzldfYUxrXhC+xCnk8N7xBJ7FK9QNMkZwh9DZR5c6MSOaiqBQV\n\
4VGAv6DJG2Gz1mxP2vfWuYa/xrM6rK2Oc0UZa/dbb6JVtuekTA9F06HlmFHdJ8dk\n\
qjqQa+NfpqPPu+gHH+jmPIwpoyS6mgQx6n2B4FV9Jl6XjzsM5MGnGmiEv44/xTAy\n\
405VHRO+bySD5wjeOFJPgzELXQyp0sg6C2se0rsqeG6n7Rx7khpEkVcENdFxv/Ga\n\
LQIDAQAB\n\
-----END PUBLIC KEY-----";

var key = new nodeRSA(keyTextPublic);
const decrypted = key.decryptPublic(encrypted, 'utf8');
console.log('decrypted: ', decrypted);

