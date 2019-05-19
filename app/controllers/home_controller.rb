class HomeController < ApplicationController
  def index; end
  def current_user_data
    user = current_user
    render json: {
        user_id: user.id,
        email: user.email,
        first_name: user.first_name
    }
  end
end
