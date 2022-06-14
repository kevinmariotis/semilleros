import React from 'react'

export const NotFound = () => {
  return (
    <div class="hold-transition sidebar-mini">
        <section class="content">
            <div class="error-page">
                <h2 class="headline text-warning"> 404</h2>

                <div class="error-content">
                    <h3><i class="fas fa-exclamation-triangle text-warning"></i> Oops! Pagina no encontrada.</h3>

                    <p>
                        No pudimos encontrar la página que estabas buscando.
                    </p>
                </div>
                {/* <!-- /.error-content --> */}
            </div>
            {/* <!-- /.error-page --> */}
        </section>
    </div>
  )
}
