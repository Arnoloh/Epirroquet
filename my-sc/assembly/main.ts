import { sendMessage, print, createSC, fileToBase64, currentPeriod, currentThread, generateEvent, transferCoins, Args, unsafeRandom, Address } from "@massalabs/massa-as-sdk"
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
	let validityStartPeriod = current_period;
	let validityStartThread = (currentThread() as u8 + 8) % 32;
	if (currentThread() as u8 + 8 >= 32)
		validityStartPeriod += 1;
	let validityEndPeriod = current_period + 20;
	let validityEndThread = validityStartThread;


	let maxGas = 1_000_000_000; // gas for smart contract execution
	let gasPrice = 0; // Message priority = gasPrice * maxGas
	let coins = 1000000000; // coins that can be used inside SC


	const args = generateSeq();

	sendMessage(address, functionName,
		validityStartPeriod, validityStartThread, validityEndPeriod, validityEndThread,
		maxGas, gasPrice, coins, args);

	generateEvent(`SC created at: ${address.toByteString()}`)

}

function generateSeq(): string {
	
	const str = "33,0,0,0;" + "13,0,1,0;" + "9,0,2,0;" + "9,0,3,0;" + "9,0,4,0;" + "32,0,5,0;" + "42,1,0,0;" + "11,1,1,0;" + "58,1,2,0;" + "16,1,5,0;" + "10,2,2,0;" + "59,2,4,0;" + "43,2,5,0;" + "34,3,2,0;" + "11,3,3,0;" + "39,3,4,0;" + "21,0,0,1;" + "1,0,1,1;" + "1,0,2,1;" + "1,0,3,1;" + "5,0,4,1;" + "20,0,5,1;" + "26,1,0,1;" + "3,1,1,1;" + "54,1,2,1;" + "4,1,5,1;" + "2,2,2,1;" + "55,2,4,1;" + "23,2,5,1;" + "30,3,2,1;" + "3,3,3,1;" + "23,3,4,1;" + "65,0,0,2;" + "61,0,1,2;" + "5,0,2,2;" + "5,0,3,2;" + "1,0,4,2;" + "20,0,5,2;" + "66,1,0,2;" + "63,1,1,2;" + "54,1,2,2;" + "0,1,5,2;" + "2,2,2,2;" + "55,2,4,2;" + "23,2,5,2;" + "30,3,2,2;" + "3,3,3,2;" + "26,3,4,2;" + "21,0,2,3;" + "1,0,3,3;" + "1,0,4,3;" + "28,0,5,3;" + "6,1,2,3;" + "0,1,5,3;" + "2,2,2,3;" + "55,2,4,3;" + "27,2,5,3;" + "22,3,2,3;" + "7,3,3,3;" + "23,3,4,3;" + "25,0,2,4;" + "5,6,3,4;" + "1,0,4,4;" + "20,0,5,4;" + "2,1,2,4;" + "12,1,5,4;" + "2,2,2,4;" + "55,2,5,4;" + "23,2,5,4;" + "66,3,2,4;" + "63,3,3,4;" + "67,3,4,4;" + "65,0,2,5;" + "61,0,3,5;" + "61,0,4,5;" + "64,0,5,5;" + "62,1,2,5;" + "60,1,5,5;" + "66,2,2,5;" + "63,2,3,5;" + "63,2,4,5;" + "67,2,5,5;" + "72,1,3,6;" + "72,1,4,6;" 
	return str
}