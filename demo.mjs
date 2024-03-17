import stringInject from 'stringinject';

var str = stringInject("My username is {username} on {platform}", { username: "tjcafferkey", platform: "GitHub" });
