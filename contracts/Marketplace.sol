//SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "../client/node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../client/node_modules/@openzeppelin/contracts/utils/Counters.sol";
import "../client/node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../client/node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Marketplace is ERC721URIStorage, Ownable{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint public productCount = 0;
    uint public tokenId;
    mapping(uint => Product) public products;

    struct Product {
        uint id;
        string name;
        string description;
        string imageurl;
        uint tokenid;
        uint price;
        address payable owner;
        bool purchased;
    }

    event ProductCreated(
        uint id,
        string name,
        string description,
        string imageurl,
        uint tokenid,
        uint price,
        address payable owner,
        bool purchased
    );

    event ProductPurchased(
        uint id,
        string name,
        string description,
        string imageurl,
        uint tokenid,
        uint price,
        address payable owner,
        bool purchased
    );

    constructor() ERC721("NFTMarket", "Elissa"){}

    function createProduct(string memory _name, string memory _description, string memory _imageurl, uint _price) public {
        require(bytes(_name).length > 0);
        require(_price > 0);
        productCount ++;
        tokenId = mintNFT(msg.sender, _imageurl);
        products[productCount] = Product(productCount, _name, _description, _imageurl, tokenId, _price, payable(msg.sender), false);
        emit ProductCreated(productCount, _name, _description, _imageurl, tokenId, _price, payable(msg.sender), false);
    }

    function purchaseProduct(uint _id) public payable {
        Product memory _product = products[_id];
        address payable _seller = _product.owner;
        require(_product.id > 0 && _product.id <= productCount);
        require(msg.value >= _product.price);
        require(!_product.purchased);
        require(_seller != msg.sender);
        _product.owner = payable(msg.sender);
        _product.purchased = true;
        products[_id] = _product;
        _transfer(ownerOf(_product.tokenid), msg.sender, _product.tokenid);
        payable (address(_seller)).transfer(msg.value);
        emit ProductPurchased(productCount, _product.name, _product.description, _product.imageurl, _product.tokenid, _product.price, payable(msg.sender), true);
    }

    
    function mintNFT(address recipient, string memory tokenURI) public returns (uint256){
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}