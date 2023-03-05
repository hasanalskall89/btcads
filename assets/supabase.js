const url = 'https://fzdrcqvrerwjfnbzjqot.supabase.co';
const anon = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6ZHJjcXZyZXJ3amZuYnpqcW90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgwMTI2OTQsImV4cCI6MTk5MzU4ODY5NH0.UHIdsDeLXK4Xn6tY5TCPlcBDHiCXATP_QE-e1K1SNVA';
const database = supabase.createClient(url, anon);
        const submit = document.querySelector('#btn');
        submit.addEventListener("click", async (e) => {
                // alert('sending')
                e.preventDefault();
                const ref = document.querySelector('#ref').value;
                const btcid = document.querySelector('#btcid').value;
                const name = document.querySelector('#name').value;
                const email = document.querySelector('#email').value;
                const phone = document.querySelector('#phone').value;
                if(ref == "" || name == "" || btcid == ""){
                        alert("يجب الـتأكد من وضع كود الوكيل والاسم وكود الحساب بالشكل الصحيح")
                        return false
                }
                submit.value = "...يتم إرسال البيانات";
                submit.setAttribute("disabled", true);
                const res = await database.from("btcids").insert({
                        ref: ref,
                        btcid: btcid,
                        name: name,
                        email: email,
                        phone: phone,
                }).select()
                if(res){
                        alert("تم إرسال معلوماتك بنجاح, وأصبح إسمك في قائمة المسابقة");
                        submit.value = "إرسال";
                        submit.setAttribute("disabled", false);
                        window.sessionStorage.setItem('name', name)
                        window.location.href = "../thanks.html"
                }else{
                        alert("حدث خطأ غير معروف, يرجى تحديث الصفحة وإعادة المحاولة مرة أخرى");
                        submit.value = "إرسال";
                        submit.setAttribute("disabled", false);
                }
                console.log(res)
        });