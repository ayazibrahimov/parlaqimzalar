
	    <!-- Header -->
	    <?php include 'includes/header.php' ?>
	    <!-- Header End -->
		
		<div class="page-content">
			<!-- inner page banner -->
			<div class="dz-bnr-inr overlay-secondary-dark dz-bnr-inr-sm" style="background-image:url(assets/images/background/bg3.jpg);">
				<div class="container">
					<div class="dz-bnr-inr-entry">
						<h1>Giriş</h1>
						<nav aria-label="breadcrumb" class="breadcrumb-row">
							<ul class="breadcrumb">
								<li class="breadcrumb-item"><a href="index.php">Ana səhifə</a></li>
								<li class="breadcrumb-item">GİRİŞ</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
			<!-- inner page banner End-->
			
			<!-- contact area -->
			<section class="content-inner shop-account">
				<!-- Product -->
				<div class="container">
					<div class="row">
						<div class="col-lg-6 col-md-6 mb-4">
							<div class="login-area">
								<div class="tab-content">
									<h4>Qeydiyyatdan keçin</h4>
									<p>Mağazamızda hesab yaratmaqla siz ödəniş prosesindən daha sürətli keçə, çoxlu çatdırılma ünvanlarını saxlaya, hesabınızda sifarişlərinizə baxa və izləyə biləcəksiniz və s.</p>
									<a class="btn btn-primary btnhover m-r5 button-lg radius-no" href="shop-registration.php">Qeydiyyatdan keçin</a>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-md-6 mb-4">
							<div class="login-area">
								<div class="tab-content nav">
									<form id="login" class="tab-pane active col-12">
										<h4 class="text-secondary">Daxil olun</h4>
										<p class="font-weight-600">Bizimlə hesabınız varsa, daxil olun.</p>
										<div class="mb-4">
											<label class="label-title">E-MAIL *</label>
											<input name="dzName" required="" class="form-control" placeholder="E-poçt hesabınız" type="email">
										</div>
										<div class="mb-4">
											<label class="label-title">Şifrə *</label>
											<input name="dzName" required="" class="form-control " placeholder="Şifrəniz" type="password">
										</div>
										<div class="text-left">
											<button class="btn btn-primary btnhover me-2">Daxil ol</button>
											<a data-bs-toggle="tab" href="#forgot-password" class="m-l5"><i class="fas fa-unlock-alt"></i> Şifrəni unutdum</a> 
										</div>
									</form>
									<form id="forgot-password" class="tab-pane fade  col-12">
										<h4 class="text-secondary">ŞİFRƏNİ UNUTMUSUZ?</h4>
										<p class="font-weight-600">Parolunuzu sıfırlamaq üçün sizə e-poçt göndərəcəyik. </p>
										<div class="mb-3">
											<label class="label-title">E-MAIL *</label>
											<input name="dzName" required="" class="form-control" placeholder="E-poçt hesabınız" type="email">
										</div>
										<div class="text-left"> 
											<a class="btn btn-outline-secondary btnhover m-r10" data-bs-toggle="tab" href="#login">Geri</a>
											<button class="btn btn-primary btnhover">Göndər</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Product END -->
			</section>
			<!-- contact area End--> 
	    </div>
		
		<!-- Footer -->
		<?php include 'includes/footer.php' ?>
		<!-- Footer End -->
		
	