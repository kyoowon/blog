module.exports = class {
  /**
   * Tistory Layer Tooltip
   *
   * @param {Object} messages
   */
  static tooltip (messages) {
    const $layerTooltip = $('.layer_tooltip')
    const $tooltip = $layerTooltip.children('.inner_layer_tooltip')

    if ($('.article.content__permalink').length) {
      setTimeout(() => {
        $layerTooltip.children('.inner_layer_tooltip').text(messages.Request)
        $layerTooltip.fadeIn(500)
      }, 5000)
      setTimeout(() => $layerTooltip.fadeOut(500), 10000)
    }

    $('.container_postbtn .postbtn_like .wrap_btn[id^=reaction-]').click(function () {
      const tooltip = $(this).find('.btn_post > .uoc-icon').hasClass('like_on') ? messages.Unheart : messages.Heart
      $tooltip.text(tooltip)

      $layerTooltip.fadeIn(500)
      setTimeout(() => $layerTooltip.fadeOut(500), 3000)
    })

    $('.btn_menu_toolbar.btn_subscription').click(function () {
      const tooltip = $(this).hasClass('following') ? messages.Unsubscribe : messages.Subscribe
      $tooltip.text(tooltip)
    })
    $('#tistorySnsLayer .btn_mark[data-service=url]').click(() => $tooltip.text(messages.Url))
  }
}