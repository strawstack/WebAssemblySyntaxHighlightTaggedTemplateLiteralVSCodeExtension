function main() {    

    // Some JS code...
    let a = 5;
    const b = 7;
    console.log(a + b);

    // Syntax highlighted wasm in a 'tagged template literal'
    const program = wasm`
        (module
            (func (export "sum")
                (param $a i32)
                (param $b i32)
                (result i32)
                get_local $a
                get_local $b
                i32.add
            return)
        )
    `;

}

