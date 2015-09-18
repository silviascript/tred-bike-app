class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
    @rides = Ride.all
     render layout: 'application', text: ''
  end

  private

  # TODO: Remove once we re-add Devise/auth
  def current_user
    User.find(1)
  end
  helper_method :current_user
end
