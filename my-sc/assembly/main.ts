import { sendMessage, print, createSC, fileToBase64, currentPeriod, generateEvent, transferCoins, Args, unsafeRandom, Address } from "@massalabs/massa-as-sdk"
import { setOf } from "@massalabs/massa-as-sdk/assembly/std/storage";

export function main(name: string): void {
	// Deploy our smart contract

	const bytes = fileToBase64('./build/smart-contract.wasm');
	const address = createSC(bytes);

	transferCoins(address, 1000000000);

	setOf(address, "data", "");
	setOf(address, "index", "0");

	// Send a 'message' to our newly deployed smart contract
	let functionName = "receive"


	let current_period = currentPeriod();
	let validityStartPeriod = current_period + 2;
	let validityStartThread = 1 as u8;
	let validityEndPeriod = current_period + 20;
	let validityEndThread = 1 as u8;


	let maxGas = 50_000_000; // gas for smart contract execution
	let gasPrice = 0; // Message priority = gasPrice * maxGas
	let coins = 1000000000; // coins that can be used inside SC


	const args = generateSeq();

	sendMessage(address, functionName,
		validityStartPeriod, validityStartThread, validityEndPeriod, validityEndThread,
		maxGas, gasPrice, coins, args.serialize());

	generateEvent(`SC created at: ${address.toByteString()}`)

}

function generateSeq(): Args {
	const args = new Args();
	args.add("33,0,0,0;")
	args.add("13,0,1,0;")
	args.add("9,0,2,0;")
	args.add("9,0,3,0;")
	args.add("9,0,4,0;")
	args.add("32,0,5,0;")
	args.add("42,1,0,0;")
	args.add("11,1,1,0;")
	args.add("58,1,2,0;")
	args.add("16,1,5,0;")
	args.add("10,2,2,0;")
	args.add("59,2,4,0;")
	args.add("43,2,5,0;")
	args.add("34,3,2,0;")
	args.add("11,3,3,0;")
	args.add("39,3,4,0;")
	args.add("21,0,0,1;")
	args.add("1,0,1,1;")
	args.add("1,0,2,1;")
	args.add("1,0,3,1;")
	args.add("5,0,4,1;")
	args.add("20,0,5,1;")
	args.add("26,1,0,1;")
	args.add("3,1,1,1;")
	args.add("54,1,2,1;")
	args.add("4,1,5,1;")
	args.add("2,2,2,1;")
	args.add("55,2,4,1;")
	args.add("23,2,5,1;")
	args.add("30,3,2,1;")
	args.add("3,3,3,1;")
	args.add("23,3,4,1;")
	args.add("65,0,0,2;")
	args.add("61,0,1,2;")
	args.add("5,0,2,2;")
	args.add("5,0,3,2;")
	args.add("1,0,4,2;")
	args.add("20,0,5,2;")
	args.add("66,1,0,2;")
	args.add("63,1,1,2;")
	args.add("54,1,2,2;")
	args.add("0,1,5,2;")
	args.add("2,2,2,2;")
	args.add("55,2,4,2;")
	args.add("23,2,5,2;")
	args.add("30,3,2,2;")
	args.add("3,3,3,2;")
	args.add("26,3,4,2;")
	args.add("21,0,2,3;")
	args.add("1,0,3,3;")
	args.add("1,0,4,3;")
	args.add("28,0,5,3;")
	args.add("6,1,2,3;")
	args.add("0,1,5,3;")
	args.add("2,2,2,3;")
	args.add("55,2,4,3;")
	args.add("27,2,5,3;")
	args.add("22,3,2,3;")
	args.add("7,3,3,3;")
	args.add("23,3,4,3;")
	args.add("25,0,2,4;")
	args.add("5,6,3,4;")
	args.add("1,0,4,4;")
	args.add("20,0,5,4;")
	args.add("2,1,2,4;")
	args.add("12,1,5,4;")
	args.add("2,2,2,4;")
	args.add("55,2,5,4;")
	args.add("23,2,5,4;")
	args.add("66,3,2,4;")
	args.add("63,3,3,4;")
	args.add("67,3,4,4;")
	args.add("65,0,2,5;")
	args.add("61,0,3,5;")
	args.add("61,0,4,5;")
	args.add("64,0,5,5;")
	args.add("62,1,2,5;")
	args.add("60,1,5,5;")
	args.add("66,2,2,5;")
	args.add("63,2,3,5;")
	args.add("63,2,4,5;")
	args.add("67,2,5,5;")
	args.add("72,1,3,6;")
	args.add("72,1,4,6;")
	return args;
}