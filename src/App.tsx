import React from "react";
import Editor from "@monaco-editor/react";

function App() {
	const defaultContract = `pragma solidity ^0.8.0;

contract HelloWorld {
    string public message = "Hello, world!";
}
`;

	const handleEditorWillMount = (monaco: any) => {
		// Register a new language
		monaco.languages.register({ id: "solidity" });

		// Define the Monarch tokenizer
		monaco.languages.setMonarchTokensProvider("solidity", {
			defaultToken: "",
			keywords: [
				"pragma",
				"solidity",
				"contract",
				"interface",
				"library",
				"import",
				"using",
				"struct",
				"enum",
				"modifier",
				"function",
				"event",
				"constructor",
				"fallback",
				"receive",
				"if",
				"else",
				"for",
				"while",
				"do",
				"continue",
				"break",
				"try",
				"catch",
				"throw",
				"emit",
				"return",
				"returns",
				"public",
				"private",
				"internal",
				"external",
				"view",
				"pure",
				"payable",
				"constant",
				"anonymous",
				"storage",
				"memory",
				"calldata",
				"indexed",
				"virtual",
				"override",
				"mapping",
				"new",
				"delete",
				"this",
				"super",
			],
			typeKeywords: [
				"bool",
				"int",
				"uint",
				"int8",
				"uint8",
				"int16",
				"uint16",
				"int32",
				"uint32",
				"int64",
				"uint64",
				"int128",
				"uint128",
				"int256",
				"uint256",
				"address",
				"string",
				"bytes",
				"byte",
			],
			operators: [
				"=",
				">",
				"<",
				"!",
				"~",
				"?",
				":",
				"==",
				"<=",
				">=",
				"!=",
				"&&",
				"||",
				"++",
				"--",
				"+",
				"-",
				"*",
				"/",
				"&",
				"|",
				"^",
				"%",
				"<<",
				">>",
				">>>",
				"+=",
				"-=",
				"*=",
				"/=",
				"&=",
				"|=",
				"^=",
				"%=",
				"<<=",
				">>=",
				">>>=",
			],
			symbols: /[=><!~?:&|+\-*\/\^%]+/,

			tokenizer: {
				root: [
					[/[a-zA-Z_$][\w$]*/, {
						cases: {
							"@keywords": "keyword",
							"@typeKeywords": "type",
							"@default": "identifier",
						},
					}],
					{ include: "@whitespace" },
					[/[{}()\[\]]/, "@brackets"],
					[/@symbols/, {
						cases: {
							"@operators": "operator",
							"@default": "",
						},
					}],
					[/\d*\.\d+([eE][\-+]?\d+)?/, "number.float"],
					[/0[xX][0-9a-fA-F]+/, "number.hex"],
					[/\d+/, "number"],
					[/".*?"/, "string"],
					[/'[^\\']'/, "string"],
					[/'.*'/, "string.invalid"],
				],
				whitespace: [
					[/[ \t\r\n]+/, ""],
					[/\/\/.*$/, "comment"],
					[/\/\*/, "comment", "@comment"],
				],
				comment: [
					[/[^\/*]+/, "comment"],
					[/\*\//, "comment", "@pop"],
					[/[\/*]/, "comment"],
				],
			},
		});

		monaco.languages.setLanguageConfiguration("solidity", {
			comments: {
				lineComment: "//",
				blockComment: ["/*", "*/"],
			},
			brackets: [["{", "}"], ["[", "]"], ["(", ")"]],
			autoClosingPairs: [
				{ open: "{", close: "}" },
				{ open: "[", close: "]" },
				{ open: "(", close: ")" },
				{ open: '"', close: '"' },
				{ open: "'", close: "'" },
			],
		});

		// 🔽 Custom autocomplete
		monaco.languages.registerCompletionItemProvider("solidity", {
			provideCompletionItems: () => {
				const suggestions = [
					// Function keywords
					{
						label: "function",
						kind: monaco.languages.CompletionItemKind.Keyword,
						insertText: "function ",
						detail: "Function Declaration",
					},
					{
						label: "constructor",
						kind: monaco.languages.CompletionItemKind.Keyword,
						insertText: "constructor() {\n\t$0\n}",
						insertTextRules:
							monaco.languages.CompletionItemInsertTextRule
								.InsertAsSnippet,
						detail: "Constructor",
					},
					// 🔽 Type keywords
					...[
						"uint256",
						"uint8",
						"int256",
						"bool",
						"address",
						"string",
						"bytes",
					].map((type) => ({
						label: type,
						kind: monaco.languages.CompletionItemKind.TypeParameter,
						insertText: type,
						detail: "Solidity Type",
					})),
					// Example function snippet
					{
						label: "publicFunction",
						kind: monaco.languages.CompletionItemKind.Function,
						insertText: "function ${1:name}() public {\n\t$0\n}",
						insertTextRules:
							monaco.languages.CompletionItemInsertTextRule
								.InsertAsSnippet,
						detail: "Public Function",
						documentation: "Define a public function",
					},
				];

				return { suggestions };
			},
		});
	};

	return (
		<Editor
			height="90vh"
			defaultLanguage="solidity"
			defaultValue={defaultContract}
			theme="vs-dark"
			beforeMount={handleEditorWillMount}
			options={{
				tabSize: 4,
				insertSpaces: true,
				detectIndentation: false,
				automaticLayout: true,
			}}
		/>
	);
}

export default App;
