// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.13;

contract Test {
    uint256 num;

    function set(uint value) public {
        num = value;
    }

    function get() public view returns (uint256) {
        return num;
    }
}