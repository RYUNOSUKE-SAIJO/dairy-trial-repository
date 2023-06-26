$(function () {
     //ハンバーガー//
     $(".js-hamburger,.js-drawer, .js-drawer a,.js-close-btn").click(function () {
        $(".js-drawer").fadeToggle(600);
        $(".js-hamburger").fadeToggle(600);
        $(".js-close-btn").fadeToggle(600);
        event.stopPropagation();
    });


    //ヘッダー//
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
      // メインビューの高さを取得
      const mainViewHeight = document.querySelector('.mv').offsetHeight;

      if (window.scrollY > mainViewHeight) {
        // ヘッダーに背景色を追加
        header.classList.add('header--scrolled');
      } else {
        // ヘッダーから背景色を削除
        header.classList.remove('header--scrolled');
      }
    });

    //swiper//
    const swiper = new Swiper(".swiper", {
        speed: 400,
        spaceBetween: 24,
        width: 274,
        loop: true,
        loopedSlides: 6,
        //slidesPerView: auto,
        pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        },
        breakpoints: {
            768: {
                      spaceBetween: 40,
                      width: 400,

            }
          }
    });
    $(function () {
        //アイテムとコンテンツを開きっぱなしにする記述//
          $(".js-accordion__item:first-child .js-accordion__content").css(
            "display", "block"
          );
        //開きっぱなしのアイテムの＋ボタンの記述//
          $(".js-accordion__item:first-child .js-accordion__title").addClass("is-open");
        //クリックしたら..//
          $(".js-accordion__title").on("click", function () {
        //"is-open"が付与されて＋ボタンがーボタンに//
            $(this).toggleClass("is-open");
        //クリックされた要素の直後の要素を300ミリ秒でスライド表示する//
            $(this).next().slideToggle(300);
          });
    });

    $(function() {
        //始めにjQueryで送信ボタンを無効化する
        $('.contact__color-btn').prop("disabled", true);
        
        //始めにjQueryで必須欄を加工する
        $('form input:required').each(function () {
            $(this).prev("label").addClass("required");
        });
        
        //入力欄の操作時
        $('form input:required').change(function () {
            //必須項目が空かどうかフラグ
            let flag = true;
            //必須項目をひとつずつチェック
            $('form input:required').each(function(e) {
                //もし必須項目が空なら
                if ($('form input:required').eq(e).val() === "") {
                    flag = false;
                }
            });
            //全て埋まっていたら
            if (flag) {
                //送信ボタンを復活
                $('.contact__color-btn').prop("disabled", false);
            }
            else {
                //送信ボタンを閉じる
                $('.contact__color-btn').prop("disabled", true);
            }
        });
    });


    jQuery(window).on("scroll", function($) {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('.floating').show();
        } else {
            jQuery('.floating').hide();
        }
    });
    
    jQuery('.floating').click(function () {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
