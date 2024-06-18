// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Test.sol";
import "../contracts/Token.sol";

contract TokenTest is Test {
    Token token;

    function setUp() public {
        token = new Token();
    }

    function testInitialBalance() public {
        uint256 deployerBalance = token.balanceOf(address(this));
        assertEq(deployerBalance, 1000 * 10 ** uint256(token.decimals()));
    }
}

