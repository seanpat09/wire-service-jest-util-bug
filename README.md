# Reproduce bug in wire-service-jest-util-bug

Test `apexWireMethodToFunction.test.js` fails because both wired apex methods are called instead just the one that was emitted.