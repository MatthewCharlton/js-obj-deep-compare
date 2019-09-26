extern crate js_sys;
use wasm_bindgen::prelude::*;
// use web_sys::console;

#[wasm_bindgen]
pub fn is_equal(
    obj1: &js_sys::Object,
    obj2: &js_sys::Object,
    initial: js_sys::Boolean,
) -> Result<bool, JsValue> {
    let mut result: bool = bool::from(initial);

    if obj1.is_object() & obj2.is_object() {
        let mut obj1_keys = &js_sys::Object::keys(obj1);
        let obj2_keys = &js_sys::Object::keys(obj2);

        if &obj1_keys == &obj2_keys {
            result = false;
        } else if obj1_keys.length() != obj2_keys.length() {
            result = false;
        } else {
            if obj2_keys.length() > obj1_keys.length() {
                obj1_keys = obj2_keys;
            }
            let obj1_iterator =
                js_sys::try_iter(obj1_keys)?.ok_or_else(|| "need to pass iterable JS values!")?;

            for x in obj1_iterator {
                // If the iterator's `next` method throws an error, propagate it
                // up to the caller.
                let x = x?;

                // console::log_2(&"Entry:".into(), &x);

                if !&js_sys::Reflect::has(obj2, &x).unwrap() {
                    // console::log_2(&"Not has prop:".into(), &x);
                    return Ok(false);
                } else {
                    let val1 = js_sys::Reflect::get(obj1, &x).unwrap();
                    let val2 = js_sys::Reflect::get(obj2, &x).unwrap();

                    if val1.is_object() & val2.is_object() {
                        // console::log_2(
                        //     &"val1 is object:".into(),
                        //     &JsValue::from_str(&val1.is_object().to_string()),
                        // );
                        // console::log_2(
                        //     &"val2 is object:".into(),
                        //     &JsValue::from_str(&val2.is_object().to_string()),
                        // );
                        // console::log_2(&"val2:".into(), &val2);
                        result = is_equal(
                            &js_sys::Object::from(val1),
                            &js_sys::Object::from(val2),
                            js_sys::Boolean::from(result),
                        )?;
                    } else if val1 != val2 {
                        // console::log_2(&"Not same val1:".into(), &val1);
                        // console::log_2(&"Not same val2:".into(), &val2);
                        return Ok(false);
                    } else if val1 == val2 {
                        // console::log_2(&" same val1:".into(), &val1);
                        // console::log_2(&" same val2:".into(), &val2);
                        return Ok(result & true);
                    } else {
                        return Ok(false);
                    }

                    // console::log_2(
                    //     &"--- result:".into(),
                    //     &JsValue::from_str(&result.to_string()),
                    // );
                }
            }
        }
    } else if obj1 != obj2 {
        // console::log_2(&"Not same obj1:".into(), &obj1);
        // console::log_2(&"Not same obj2:".into(), &obj2);
        return Ok(false);
    } else if obj1 == obj2 {
        // console::log_2(&" same obj1:".into(), &obj1);
        // console::log_2(&" same obj2:".into(), &obj2);
        return Ok(result & true);
    } else {
        return Ok(false);
    }

    Ok(result)
}
