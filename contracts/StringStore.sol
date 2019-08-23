pragma solidity ^0.5.0;

contract StringStore {
  string public stored_string = 'Hello World';

  function set(string memory str) public {
    stored_string = str;
  }
}
