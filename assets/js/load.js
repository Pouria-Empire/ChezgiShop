// class Product {
//     title = 'DEFAULT';
//     imageUrl;
//     description;
//     price;
//
//     constructor(title,image,desc,price){
//         this.title = title;
//         this.imageUrl = image;
//         this.description = desc;
//         this.price = price;
//     }
// }
//
// class ProductList{
//     products = [
//         new Product("محصول اول",
//         "images/p1.jpeg",
//         "توضیحات محصول شماره اول برای جلب توجه مخاطبان",
//         2000000),
//
//         new Product("محصول دوم",
//         "images/p2.jpeg",
//         "توضیحات محصول شماره دوم برای جلب توجه مخاطبان",
//         5000000),
//
//         new Product("محصول اول",
//         "images/p3.jpeg",
//         "توضیحات محصول شماره اول برای جلب توجه مخاطبان",
//         2000000),
//
//         new Product("محصول دوم",
//         "images/p4.jpeg",
//         "توضیحات محصول شماره دوم برای جلب توجه مخاطبان",
//         3500000),
//
//         new Product("محصول اول",
//         "images/p5.jpeg",
//         "توضیحات محصول شماره اول برای جلب توجه مخاطبان",
//         2010000),
//
//         new Product("محصول دوم",
//         "images/p6.jpeg",
//         "توضیحات محصول شماره دوم برای جلب توجه مخاطبان",
//         2350000)
//
//     ]
//     render(){
//         const renderHook = document.getElementById('app');
//         const prodlist = document.createElement('div');
//         prodlist.className = "row cards_class";
//         for(const prod of this.products){
//             const prodEl = document.createElement('div');
//             prodEl.className = "col-sm-4 each_card";
//             prodEl.innerHTML = `
//             <div class="card">
//               <div class="card-body">
//                 <img class="card-img-top each_image" src="${prod.imageUrl}" alt="${prod.title}">
//                 <h4 class="card-title">${prod.title}</h4>
//                 <h5 class="pricing">تومان${prod.price}</h5>
//                 <p class="card-text">${prod.description}</p>
//                 <a href="#" class="btn btn-primary">افزودن به سبد خرید</a>
//               </div>
//             </div>
//
//             `;
//             prodlist.append(prodEl);
//         }
//         renderHook.append(prodlist);
//     }
// }
//
// const productList = new ProductList();
// productList.render();